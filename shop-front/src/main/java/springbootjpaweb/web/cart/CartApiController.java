package springbootjpaweb.web.cart;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;
import springbootjpaweb.domain.member.Member;
import springbootjpaweb.domain.product.Product;
import springbootjpaweb.representative.*;
import springbootjpaweb.service.CartService;
import springbootjpaweb.util.ApiResponse;

import java.util.List;

@Slf4j
@RestController
@RequestMapping("/cart")
@RequiredArgsConstructor
public class CartApiController {

    private final CartService cartService;

    @PostMapping("")
    @CrossOrigin(origins ="http://localhost:8081" )
    public void insert(@RequestBody CartRequest cartRequest){

        Member member = Member.builder()
                .id(cartRequest.getMember_id())
                .build();
        Product product = Product.builder()
                .id(cartRequest.getProduct_id())
                .build();
        CartResponse cartResponse = CartResponse.builder()
                .member_id(cartRequest.getMember_id())
                .member(member)
                .product_id(cartRequest.getProduct_id())
                .product(product)
                .count(cartRequest.getCount())
                .build();

        cartService.save(cartResponse);
    }

    @GetMapping("/{id}")
    @CrossOrigin(origins = "http://localhost:8081")
    public ApiResponse<List<CartResponse>> read(@PathVariable Long id){
        return ApiResponse.ok(cartService.getCarts(id));

    }
}
