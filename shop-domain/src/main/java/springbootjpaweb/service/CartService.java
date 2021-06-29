package springbootjpaweb.service;

import lombok.Builder;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import springbootjpaweb.domain.cart.Cart;
import springbootjpaweb.repository.CartRepository;
import springbootjpaweb.representative.CartResponse;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;

@Slf4j
@Service
public class CartService {

    private final CartRepository cartRepository;

    public CartService(CartRepository cartRepository) {
        this.cartRepository = cartRepository;
    }

    public void save(CartResponse cartResponse){
        Cart cart = Cart.builder()
//                .member_id(cartResponse.getMember_id())
//                .product_id(cartResponse.getProduct_id())
                .member(cartResponse.getMember())
                .product(cartResponse.getProduct())
                .count(cartResponse.getCount())
                .build();
        cartRepository.save(cart);
    }
    @Transactional
    public List<CartResponse> getCarts(Long memberId){
        List<CartResponse> cartResponseList = new ArrayList<>();
        List<Cart> carts = cartRepository.findAllByMemberId(memberId);
        for (Cart cart : carts){
            CartResponse cartResponse = CartResponse.builder()
                    .id(cart.getId())
//                    .member_id(cart.getMember_id())
//                    .product_id(cart.getProduct_id())
                    .product(cart.getProduct())
                    .count(cart.getCount())
                    .build();
            cartResponseList.add(cartResponse);
        }

        return cartResponseList;
    }

}
