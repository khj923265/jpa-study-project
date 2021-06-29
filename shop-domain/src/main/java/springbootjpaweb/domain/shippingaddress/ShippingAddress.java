package springbootjpaweb.domain.shippingaddress;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.envers.Audited;
import springbootjpaweb.domain.member.Member;
import springbootjpaweb.domain.order.Order;

import javax.persistence.*;

@Entity
@Getter
@Builder
@Table(name = "tn_shipping_address")
@NoArgsConstructor
@AllArgsConstructor
public class ShippingAddress {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "postal_code")
    private int postal_code;

    @Column(name = "address1")
    private String address1;

    @Column(name = "address2")
    private String address2;

    @Column(name = "receiver_name")
    private String receiver_name;

    @Column(name = "receiver_phone")
    private String receiver_phone;

    @Column(name = "message")
    private String message;

    @Column(name = "pickup_location")
    private String pickup_location;

    @ManyToOne
    @JoinColumn(name = "member_id")
    private Member member;

    @OneToOne(mappedBy = "shippingAddress")
    private Order order;

}
