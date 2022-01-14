package org.beta.zon.security.config.Jwt;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import lombok.extern.slf4j.Slf4j;
import org.beta.zon.security.exception.UserNotFoundException;
import org.beta.zon.security.service.UserDetailsImpl;
import org.beta.zon.user.domain.User;
import org.beta.zon.user.repository.UserRepository;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@Slf4j
public class JWTAutjorizationFilter extends BasicAuthenticationFilter {

    private final UserRepository userRepository;
    private final HttpSession session;

    public JWTAutjorizationFilter(AuthenticationManager authenticationManager, UserRepository userRepository, HttpSession session, UserRepository userRepository1, HttpSession session1) {
        super(authenticationManager);
        this.userRepository = userRepository;
        this.session = session;
    }


    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain chain) throws IOException, ServletException {

        log.info("권한이 필요한 요청이 들어옵니다");
        String header = request.getHeader(JwtProperties.TOKEN_HEADER);
        log.info("token => {} ", header);

        if(header == null || !header.startsWith(JwtProperties.TOKEN_PRIFIX)){
            log.info("check!");
            chain.doFilter(request, response);
            return;
        }

        String token = header.replace(JwtProperties.TOKEN_PRIFIX, "");
        Long userno = JWT.require(Algorithm.HMAC256(JwtProperties.SECRET))
                .build().verify(token).getClaim("id").asLong();
        log.info("userno => {} ", userno);


        // 보안을 위한 토큰 추가적으로 하기
        //https://www.bezkoder.com/spring-boot-react-jwt-auth/
        //https://cheese10yun.github.io/spring-oauth2-provider/

        if (userno != null) {
            log.info("토큰 가져오기 성공");

            User user = userRepository.findById(userno).orElseThrow(() -> {
                return new UserNotFoundException("유저 정보를 찾을 수 없습니다");
            });

            UserDetailsImpl userDetails = new UserDetailsImpl(user.getUserno(), user.getUsername(),
                    user.getPassword(), user.getName(), user.getAddress(), user.getPhoneNumber(), user.getEmail(),
                    user.isFromSocial(), );
                // authorities


            // https://github.com/stella6767/security--back/blob/c620731f6d5fcbf1a079f15744cd6ce84695373c/src/main/java/com/example/security/config/jwt/JWTAuthorizationFilter.java#L26
            // https://github.com/stella6767/security--back/blob/c620731f6d/src/main/java/com/example/security/config/auth/PrincipalDetails.java
        }
    }
}
