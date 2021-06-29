package springbootjpaweb.service;

import org.springframework.stereotype.Service;
import springbootjpaweb.domain.banner.Banner;
import springbootjpaweb.repository.BannerRepository;
import springbootjpaweb.representative.BannerResponse;

import java.util.ArrayList;
import java.util.List;

@Service
public class BannerService {

    private final BannerRepository bannerRepository;

    public BannerService(BannerRepository bannerRepository) {
        this.bannerRepository = bannerRepository;
    }

    public List<BannerResponse> read(){
        List<Banner> banners = bannerRepository.findAll();
        List<BannerResponse> bannerResponseList = new ArrayList<>();
        for (Banner banner : banners){
            BannerResponse bannerResponse = BannerResponse.builder()
                    .id(banner.getId())
                    .img_path(banner.getImg_path())
                    .title(banner.getTitle())
                    .subtitle(banner.getSubtitle())
                    .build();
            bannerResponseList.add(bannerResponse);
        }
        return bannerResponseList;
    }
}
