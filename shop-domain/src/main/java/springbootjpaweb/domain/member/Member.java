package springbootjpaweb.domain.member;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.envers.Audited;
import org.hibernate.envers.NotAudited;
import springbootjpaweb.data.domain.AbstractAuditable;
import springbootjpaweb.domain.Role;
import springbootjpaweb.domain.order.Order;
import springbootjpaweb.domain.shippingaddress.ShippingAddress;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
//@Audited    // 이 어노테이션이 테이블을 생성
@Builder
@Table(name = "tn_member")
@NoArgsConstructor
@AllArgsConstructor
public class Member extends AbstractAuditable<Long> {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "password")
    private String password;

    @Column(name = "name", length = 200)
    private String name;

    @Lob
    @Column(name = "email")
    private String email;

    @Column(name = "address1")
    private String address1;

    @Column(name = "address2")
    private String address2;

    @Column(name = "address3")
    private String address3;

    @Column(name = "phone")
    private String phone;

    @Enumerated(EnumType.STRING)
    @Column(name = "role")
    private Role role;

    @Column(name = "lastLoginDate")
    private LocalDateTime lastLoginDate;

    @OneToMany(mappedBy = "member",fetch = FetchType.LAZY)
    private final List<ShippingAddress> shippingAddresses = new ArrayList<>();

    @OneToMany(mappedBy = "member",fetch = FetchType.LAZY)
    private final List<Order> order = new ArrayList<>();

//    public void lastLoginDateNovation(){
//        this.lastLoginDate = LocalDateTime.now();
//    }
}
