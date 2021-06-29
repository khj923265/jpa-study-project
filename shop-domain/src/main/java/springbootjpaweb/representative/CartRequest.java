package springbootjpaweb.representative;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import springbootjpaweb.domain.member.Member;
import springbootjpaweb.domain.product.Product;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CartRequest {
    Long id;
    Long member_id;
    Long product_id;
    int count;
}
