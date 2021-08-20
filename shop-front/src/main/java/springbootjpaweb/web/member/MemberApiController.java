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
import springbootjpaweb.data.config.JwtTokenProvider;
import springbootjpaweb.data.domain.PrincipalDetails;
import springbootjpaweb.domain.member.Member;
import springbootjpaweb.repository.MemberRepository;
import springbootjpaweb.representative.MemberRequest;
import springbootjpaweb.representative.MemberResponse;
import springbootjpaweb.service.MemberService;
import springbootjpaweb.util.ApiResponse;

import java.security.Principal;
import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

@Slf4j
@RestController
@RequestMapping("/member")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:8081")
public class MemberApiController {

    private final MemberService memberService;
    private final MemberRepository memberRepository;
    private final JwtTokenProvider jwtTokenProvider;

    @PostMapping("/signup")
    public ApiResponse<String> loginJoin(@RequestBody MemberRequest memberRequest) {
        memberService.save(memberRequest);
        return ApiResponse.ok();
    }

    @GetMapping("/loginSuccess")
    public ApiResponse<Object> loginSuccess(){
        MemberRequest memberRequest = new MemberRequest();
                memberRequest.setId(1L);
        return ApiResponse.ok(memberRequest);
    }

    @PostMapping("/login")
    public ApiResponse<Map<String, Object>> login(@RequestBody MemberRequest memberRequest){
        Map<String, Object> map = new HashMap<>();
        Optional<Member> member = memberRepository.findByEmail(memberRequest.getEmail());
        String result = "";
        if (member.isPresent()) {
            result = jwtTokenProvider.createToken(member.get().getEmail(), member.get().getRole().getSymbol());
            map.put("token", result);
            map.put("id", member.get().getEmail());
        }
        return ApiResponse.ok(map);
    }

}