package api.betadoma.back.user.service;

import api.betadoma.back.common.domain.PageRequestDTO;
import api.betadoma.back.common.domain.PageResultDTO;
import api.betadoma.back.common.service.AbstractService;
import api.betadoma.back.security.domain.SecurityProvider;
import api.betadoma.back.user.domain.User;
import api.betadoma.back.user.domain.dto.UserDTO;
import api.betadoma.back.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;
import java.util.function.Function;

@Service
@Log4j2
@RequiredArgsConstructor
@Transactional
public class UserServiceImpl extends AbstractService<User> implements UserService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final SecurityProvider securityProvider;
    private final AuthenticationManager authenticationManager;

    @Override
    public PageResultDTO<UserDTO, User> getList(PageRequestDTO requestDTO) {

        Pageable pageable = requestDTO.getPageable(Sort.by("userId").descending());
        Page<User> result = userRepository.findAll(pageable);
        Function<User, UserDTO> fn = (entity -> entityToDto(entity));

        return new PageResultDTO<>(result, fn);
    }

    @Transactional
    @Override
    public String signup(UserDTO userDto) {
        log.info("Sign Up ServiceImpl 시작");
        log.info("userDto ::::: "  + userDto);

        User entity = dtoToEntity(userDto);
        log.info("entity = " + entity);
        userRepository.save(entity);

        log.info("Sign up ServiceImpl 끝");
        return "Signup Success";
    }

    @Override
    public UserDTO signin(UserDTO uSerDto) {
        log.info("Sign In ServiceImpl 시작");

        User entity = dtoToEntity(uSerDto);
        userRepository.signin(entity.getUsername(), entity.getPassword());

        return null;
    }

    @Override
    public String save(User user) {
        userRepository.save(user);

        return (userRepository.save(user) != null) ? "Save Success":"Save Fail";
    }

    @Override
    public Optional<User> findById(Long id) {

        return userRepository.findById(id);
    }

    @Override
    public List<User> findAll() {

        return userRepository.findAll();
    }

    @Override
    public Long count() {

        return userRepository.count();
    }

    @Override
    public Optional<User> getOne(Long id) {
        // .ofNullable = value가 null인 경우 비어있는 Optional을 반환
        return Optional.ofNullable(userRepository.getOne(id));
    }

    @Override
    public String delete(User user) {
        userRepository.delete(user);
        return userRepository.findById(user.getUserId()).orElse(null) == null ? "Suceess" : "Fail";
    }

    @Override
    public Boolean existsById(long id) {
        return userRepository.existsById(id);
    }

    @Override
    public void deleteAll() {

        userRepository.deleteAll();
    }
}