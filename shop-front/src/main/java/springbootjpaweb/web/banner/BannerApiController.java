package springbootjpaweb.web.banner;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import springbootjpaweb.representative.BannerResponse;
import springbootjpaweb.service.BannerService;
import springbootjpaweb.util.ApiResponse;

import java.util.List;

@Slf4j
@RestController
@RequestMapping("/banner")
@RequiredArgsConstructor
public class BannerApiController {

    private final BannerService bannerService;

    @GetMapping("")
    @CrossOrigin(origins ="http://localhost:8081" )
    public ApiResponse<List<BannerResponse>> loginJoin() {
        return ApiResponse.ok(bannerService.read());
    }
}
