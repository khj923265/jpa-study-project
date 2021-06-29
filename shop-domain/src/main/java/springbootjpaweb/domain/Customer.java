package springbootjpaweb.domain;//package com.jiwon.springbootjpaweb.domain;
//
//import com.jiwon.springbootjpaweb.data.domain.AbstractAuditable;
//import com.jiwon.springbootjpaweb.data.domain.GenerateKey;
//import lombok.Builder;
//import lombok.Getter;
//import lombok.NoArgsConstructor;
//import org.hibernate.envers.Audited;
//
//
//import javax.persistence.*;
//import java.time.LocalDateTime;
//
//@Entity
//@Getter
//@Audited    // 이 어노테이션이 테이블을 생성
//@Table(name = "customer")
//@NoArgsConstructor
//public class Customer extends AbstractAuditable<Long> {
//
//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    private Long id;
//
//    @GenerateKey
//    @Column(name = "key")
//    private String key;
//
//    @Column(name = "password")
//    private String password;
//
//    @Column(name = "name", length = 200)
//    @Transient  //해당 테이블의 컬럼과 매핑시키지 않겠다.
//    private String name;
//
//    @Lob
//    @Column(name = "email")
//    private String email;
//
//    @Enumerated(EnumType.STRING)
//    @Column(name = "role")
//    private Role role;
//
//    @Column(name = "lastLoginDate")
//    private LocalDateTime lastLoginDate;
//
//    @Builder
//    public Customer(String email, String password, String name, Role role, LocalDateTime lastLoginDate) {
//        this.email = email;
//        this.password = password;
//        this.name = name;
//        this.role = role;
//        this.lastLoginDate = lastLoginDate;
//        this.setCreatedBy(getCreatedBy());
////        this.setLastModifiedBy(getLastModifiedBy());
//    }
//
//    public void lastLoginDateNovation2(){
////        this.setLastModifiedBy(getLastModifiedBy());
//        this.lastLoginDate = LocalDateTime.now();
//    }
//
//}
