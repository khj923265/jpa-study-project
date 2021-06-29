package springbootjpaweb.web.member;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.annotation.CreatedBy;
import org.springframework.data.domain.AuditorAware;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;
import springbootjpaweb.data.domain.PrincipalDetails;
import springbootjpaweb.representative.MemberRequest;
import springbootjpaweb.service.MemberService;
import springbootjpaweb.util.ApiResponse;

import java.security.Principal;
import java.util.Optional;

@Slf4j
@RestController
@RequestMapping("/member")
@RequiredArgsConstructor
public class MemberApiController {

    private final MemberService memberService;

    @PostMapping("/signup")
    @CrossOrigin(origins ="http://localhost:8081" )
    public ApiResponse<String> loginJoin(@RequestBody MemberRequest memberRequest) {
        memberService.save(memberRequest);
        return ApiResponse.ok();
    }

    @GetMapping("/loginSuccess")
    @CrossOrigin(origins = "http://localhost:8081")
    public ApiResponse<Object> loginSuccess(){
        MemberRequest memberRequest = new MemberRequest();
                memberRequest.setId(1L);
        return ApiResponse.ok(memberRequest);
    }

}