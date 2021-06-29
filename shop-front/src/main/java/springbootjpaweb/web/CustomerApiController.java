package springbootjpaweb.web;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import springbootjpaweb.data.domain.PrincipalDetails;
import springbootjpaweb.representative.MemberRequest;
import springbootjpaweb.service.MemberService;
import springbootjpaweb.util.ApiResponse;

import java.net.URI;

@Slf4j
@Controller
@RequiredArgsConstructor
public class CustomerApiController {

    private final MemberService memberService;

    @GetMapping("/")
    public String main() {
        return "main";
    }

    @GetMapping("/login")
    public String login() {
        return "login";
    }

    @GetMapping("/login/join")
    public String join() {
        return "login-join";
    }

    @PostMapping("/member/join")
    public ApiResponse<String> loginJoin(MemberRequest memberRequest) {
        memberService.save(memberRequest);
        return ApiResponse.ok();
    }

    @GetMapping("/login/update/{id}")
    public String update(@PathVariable(name="id")Long id) {
        memberService.update(id);
        return "redirect:/";
    }

    @GetMapping("/login-user-info")
    public ResponseEntity getloginUserInfo() {
        Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        String name = "";
        if(principal instanceof  UserDetails){
            name = ((PrincipalDetails)principal).getUsername();
        }else {
            name = principal.toString();
        }
        return ResponseEntity
                .created(URI.create("/login-user-info"))
                .body(name);
    }

}