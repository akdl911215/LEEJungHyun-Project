package org.beta.zon.security.domain;

import io.jsonwebtoken.*;
import lombok.extern.log4j.Log4j2;

import java.nio.charset.StandardCharsets;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

@Log4j2
public class SecurityToken {

    private final String token;
    private final String key;
    private int tokenExpirationMsec = 1800000; // 만료시간 30분
    private static final String AUTHORITIES_KEY = "role";

    public SecurityToken(String token, String key) {
        this.token = token;
        this.key = key;
    }

    public String createToken() { // jwt.io 에서 보면서 작성
        try {
            Map<String, Object> headers = new HashMap<>();
            headers.put("alg", "HS256");
            headers.put("typ", "JWT");

            Map<String, Object> payloads = new HashMap<>();
            payloads.put("data", "my First JWT");

            long exirationTime = 1000 * 60L * 60L * 1L; // 토큰 유효시간 1시간
            Date ext = new Date();
            ext.setTime(ext.getTime() + exirationTime);

            return Jwts
                    .builder()
                    .setHeader(headers)
                    .setClaims(payloads)
                    .setSubject("user")
                    .setExpiration(ext)
                    .signWith(SignatureAlgorithm.HS256, key.getBytes())
                    .compact();
        } catch (SecurityException e) {
            log.info("Invalid JWT Signature");
        } catch (MalformedJwtException e) {
            log.info("Invalid JWT token");
        } catch (ExpiredJwtException e) {
            log.info("Expiration JWT token");
        } catch (UnsupportedJwtException e) {
            log.info("Unsupported JWT Signature");
        } catch (IllegalArgumentException e) {
            log.info("JWT token compact of handler are invalid");
        }
        return null ;
    }
}
