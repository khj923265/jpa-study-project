package springbootjpaweb.representative;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class MemberRequest {
    private Long id;
    private String email;   //로그인 아이디
    private String password;
    private String name;    //회원의 이름
    private String phone;
}
