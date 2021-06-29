package springbootjpaweb.controller;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import springbootjpaweb.representative.MemberRequest;
import springbootjpaweb.service.MemberService;

@RestController
@RequestMapping
@AllArgsConstructor
public class RestTestController {

    private final MemberService memberService;

    @GetMapping("/member/hello")
    public String Hello(){
        return "hello";
    }

    @PostMapping("/signup")
    public String singUp(MemberRequest memberRequest){
        memberService.save(memberRequest);
        return "redirect:/login";
    }
}
