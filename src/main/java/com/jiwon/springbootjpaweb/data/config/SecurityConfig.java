package com.jiwon.springbootjpaweb.data.config;

import com.jiwon.springbootjpaweb.service.CustomerService;
import lombok.AllArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.domain.AuditorAware;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;

import java.util.Optional;

@Configuration
@EnableWebSecurity
@AllArgsConstructor
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    private CustomerService customerService;

    // 패스워드 인코딩을 사용하기 위한 빈
    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    // audit을 사용 할 때 유저의 이름을 가져올 수 있게하는 빈
    @Bean
    public AuditorAware<String> defaultAuditorAware() {
        return () -> {
            Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
            if (authentication == null) {
                return Optional.of("unknown");
            }
            return Optional.ofNullable(authentication.getName());
        };
    }

    @Override
    public void configure(WebSecurity web) throws Exception {
        // static 디렉터리의 하위 파일 목록은 인증 무시 ( = 항상통과 )
        web.ignoring().antMatchers("/css/**", "/js/**", "/img/**", "/lib/**");
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.csrf().disable().formLogin().disable()
                .authorizeRequests()
                // 페이지 권한 설정
//                .antMatchers("/admin/**").hasRole("ADMIN")
                .antMatchers("/").hasRole("USER")
                .antMatchers("/**").permitAll()
                .and() // 로그인 설정
                .formLogin()
                .loginPage("/login")
                .defaultSuccessUrl("/")
                .permitAll()
                .and() // 로그아웃 설정
                .logout()
                .logoutRequestMatcher(new AntPathRequestMatcher("/logout"))
                .logoutSuccessUrl("/")
                .invalidateHttpSession(true)
                .and()
                // 403 예외처리 핸들링
                .exceptionHandling().accessDeniedPage("/user-access-denied");
    }

    @Override
    public void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.userDetailsService(customerService).passwordEncoder(passwordEncoder());
    }
}