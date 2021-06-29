package springbootjpaweb.service;

import org.springframework.context.annotation.Lazy;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.ObjectUtils;
import org.springframework.web.bind.annotation.CrossOrigin;
import springbootjpaweb.data.domain.PrincipalDetails;
import springbootjpaweb.domain.Role;
import springbootjpaweb.domain.member.Member;
import springbootjpaweb.repository.MemberRepository;
import springbootjpaweb.representative.MemberRequest;

import java.util.Optional;

// 시큐리티 설정에서 loginProcessingUrl("/login");
// /login 요청이 오면 자동으로 UserDetailsService 타입으로 ioc되어 있는 loadUserByUsername 함수가 실행

@Service
public class MemberService implements UserDetailsService {

    private final MemberRepository memberRepository;

    private final PasswordEncoder bCryptPasswordEncoder;

    public MemberService(MemberRepository memberRepository,@Lazy PasswordEncoder bCryptPasswordEncoder){
        this.memberRepository = memberRepository;
        this.bCryptPasswordEncoder = bCryptPasswordEncoder;
    }

    @Transactional
    public void save(MemberRequest memberRequest) {
        Member member = Member.builder()
                .email(memberRequest.getEmail())
                .password(bCryptPasswordEncoder.encode(memberRequest.getPassword()))
                .name(memberRequest.getName())
                .phone(memberRequest.getPhone())
                .role(Role.USER)
                .build();
        // 객체화를 위해 따로 갱신.
//        member.lastLoginDateNovation();
        memberRepository.save(member);

    }

    // 시큐리티 session(내부 Authentication(내부 UserDetails))
    @Override
    @Transactional
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Member member = memberRepository.findByEmail(username)
                .orElseThrow(() -> new UsernameNotFoundException((username)));
//        member.lastLoginDateNovation();
        if(!ObjectUtils.isEmpty(member)){
            return new PrincipalDetails(member);
        }
        return null;
    }

    @Transactional
    public void update(Long id) {
        Optional<Member> member = memberRepository.findById(id);
        // 객체화를 위해 따로 갱신.
//        member.get().lastLoginDateNovation();

    }
}
