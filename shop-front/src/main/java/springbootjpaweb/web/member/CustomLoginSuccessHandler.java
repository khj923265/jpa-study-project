package springbootjpaweb.web.member;

import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

public class CustomLoginSuccessHandler implements AuthenticationSuccessHandler {

    @Override
    public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response, Authentication authentication) throws IOException, ServletException {
        //roleNames.contains << 로그인한 유저의 role
        List<String> roleNames = new ArrayList<>();
        authentication.getAuthorities().forEach(authority ->{roleNames
                .add(authority.getAuthority());
        });

        response.sendRedirect("http://localhost:8081");

    }

}
