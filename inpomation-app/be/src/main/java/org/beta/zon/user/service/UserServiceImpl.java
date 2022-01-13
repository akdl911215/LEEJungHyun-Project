package org.beta.zon.user.service;

import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.beta.zon.common.service.AbstractService;
import org.beta.zon.security.domain.SecurityProvider;
import org.beta.zon.user.domain.User;
import org.beta.zon.user.domain.dto.UserDto;
import org.beta.zon.user.domain.role.Role;
import org.beta.zon.user.repository.UserRepository;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
@Log4j2
@RequiredArgsConstructor
public class UserServiceImpl extends AbstractService<User> implements UserService{

    private final UserRepository userRepository;
    private final SecurityProvider securityProvider;
    private final PasswordEncoder passwordEncoder;

    @Override
    public String save(User user) {
        return userRepository.save(user) == null ? "Save Success" : "Save Failed";
    }


    @Override
    public Optional<User> findById(Long userno) {
        return userRepository.findById(userno);
    }

    @Override
    public void modify(UserDto userDto) {

    }

    @Override
    public UserDto signin(UserDto userDto) {
        log.info("userDto.getUsername() : " + userDto.getUsername());
        log.info("userDto.getPassword() : " + userDto.getPassword());
        log.info("userDto.getRoles() : " + userDto.getRoles());


        User entity = dtoEntity(userDto);
        log.info("entity 변환 값 = " + entity);
        log.info("entity.getRoles() : " + entity.getRoles());

        //boolean loginSN = validationLogin(entity.getUsername(), entity.getPassword());
        //log.info("loginSN : "+ loginSN);

//        if (loginSN == false){
//            log.info("유효성 검사 실패하였습니다.");
//            userDto.setLoginSuccessOrNot(false);
//            userDto.setToken(null);
//
//            return userDto;
//        }
  //      else {
            log.info("유효성 검사 성공하였습니다.");


            System.out.println("entity.getUsername(),    entity.getPassword()" + entity.getUsername() + " ,  "  + entity.getPassword());

            //User userEntity = userRepository.signin(entity.getUsername(), entity.getPassword());

            Optional<User> userEntity = userRepository.findByUsername(entity.getUsername());

            log.info("userEntity=>"+ userEntity.orElseThrow(() -> {
                return new RuntimeException("user를 찾을 수 없습니다!!");
            }).getRoles());


//            log.info("user.getRole!!!!!!1" + user.getRoles());


//            entity.changeRoles(entity.getRoles());
            log.info("entity ::: " + entity);
            log.info("entity.getRoles() ::: " + entity.getRoles());


            log.info("1");
            String token = securityProvider.createToken(entity.getUsername(), entity.getRoles());
            log.info("token : " + token);
            log.info("2");
            UserDto entityDto = entityDto(entity);
            entityDto.setToken(token);
//            entityDto.setToken(securityProvider.createToken(entityDto.getUsername(), entityDto.getRoles()));
            log.info("3");
            entityDto.setLoginSuccessOrNot(true);
            log.info("entityDto.getToken() = " + entityDto.getToken());

            return userDto;
  //      }
    }

    @Override
    public Role validationRole(Role roles) {
        log.info("validationRole 동작");
        Role loginUserRole = userRepository.findByRoles(roles);

        return loginUserRole;
    }

    @Override
    public List<User> findAll() {
        return userRepository.findAll();
    }

    @Override
    public void deleteById(Long userno) {
        userRepository.deleteById(userno);
    }

    @Override
    public String signup(UserDto userDto) {
        log.info("Signup ServiceImple 시작");
        log.info("userDto : " + userDto);
        userDto.setPassword(passwordEncoder.encode(userDto.getPassword()));
        User entity = dtoEntity(userDto);
        entity.changeRoles(Role.MEMBER);

        User useEntity = userRepository.save(entity);

        log.info("userEntity=>" + useEntity);

//        userRepository.save(entity);
//        log.info("저장 후 entity : " + entity);
//        UserDto entityDto = entityDto(entity);
//        // String.matches() 은 특정 패턴의 문자열을 포함하는지 확인

        boolean matchResult = passwordEncoder.matches("1", useEntity.getPassword());
        System.out.println("matchResult : " + matchResult);




        return "Success";
    }



    @Override
    public boolean validationLogin(String username, String password) {
        log.info("validataionLogin 동작");
        Optional<User> loginUser = userRepository.findByUsername(username);
        if (loginUser == null){
            System.out.println("해당 아이다가 존재하지 않습니다.");
            return false;
        }
        if (!passwordEncoder.matches(password, loginUser.get().getPassword())) {
            System.out.println("비밀번호가 일치하지 않습니다.");
            return false;
        }
        return true;
    }

    @Override
    public Long count() {
        return userRepository.count();
    }

    @Override
    public Optional<User> getOne(Long userno) {
        return Optional.ofNullable(userRepository.getOne(userno));
        // ofNullable() 메소드는 명시된 값이 null이 아니면 명시된 값을 가지는
        // Optional 객체를 반환하며, 명시된 값이 null이면 비어있는 Optional 객체를 반환환
    }

    @Override
    public String delete(User user) {
        userRepository.delete(user);
        return userRepository.findById(user.getUserno())
                .orElse(null) == null ?
                "Success" : "Fail";
        // orElse() 해당 값이 null이거나 null이 아니어도 실행
    }

    @Override
    public Boolean existsById(long id) {
        return null;
    }

    @Override
    public void deleteAll() {
        userRepository.deleteAll();
    }
}
