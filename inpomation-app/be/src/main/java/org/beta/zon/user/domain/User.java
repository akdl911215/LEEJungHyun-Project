package org.beta.zon.user.domain;

import lombok.*;
import org.beta.zon.common.domain.BaseEntity;
import org.beta.zon.user.domain.role.Role;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "user")
@ToString
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class User extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    @Column(name = "user_id") // , unique = true, nullable = false
    private Long userno;

    @Column(name = "username") // , unique = true, nullable = false
    private String username;
    @Column(name = "password") // , nullable = false
    private String password;
    @Column(name = "name")  // , nullable = false
    private String name;
    @Column(name = "email")  // , nullable = false
    private String email;
    @Column(name = "phone_number")  // , nullable = false
    private String phoneNumber;
    @Column(name = "address")  // , nullable = false
    private String address;
    @Column(name = "from_social")
    private boolean fromSocial;

    public void changeUsername(String username) {
        this.username = username;
    }

    public void changePassword(String password) {
        this.password = password;
    }

    public void changeName(String name) {
        this.name = name;
    }

    public void changeEmail(String email) {
        this.email = email;
    }

    public void changePhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public void changeAddress(String address) {
        this.address = address;
    }

    public void changeFromSocial(boolean fromSocial) { this.fromSocial = fromSocial; }

    @ElementCollection(fetch = FetchType.LAZY) // Lazy 로딩 설정이 되어 있는 Entity는 프록시 객체로 가져온다
                                                // 후에 실제 객체를 사용하는 시점에 초기화된다. DB에 쿼리 실행
    @Builder.Default // 기본값 설정
    private Set<Role> roleSet = new HashSet<>();

    public void addMemberRole(Role role) {
        roleSet.add(role);
    }
}
