package com.smwuis.sooksook.domain.user;

import com.smwuis.sooksook.domain.BaseTimeEntity;
import com.smwuis.sooksook.web.dto.user.UserSignUpForm;
import com.smwuis.sooksook.web.dto.user.UserUpdateForm;
import java.util.List;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.Email;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.ColumnDefault;
import org.hibernate.annotations.DynamicInsert;

@Entity
@Getter
@DynamicInsert
@NoArgsConstructor
@Table(name = "users")
public class User extends BaseTimeEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "user_id", unique = true)
    private Long id;    // 시스템의 데이터 아이디 (회원 id X)

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<UserSchedule> userScheduleList;

    @Column(nullable = false)
    private String name;

    @Email
    @Column(nullable = false)
    private String email;

    @Column(nullable = false)
    private String nickname;

    @Setter
    @Column(nullable = false)
    private String password;

    @Column(nullable = true)
    private String introduction;

    @Column(nullable = false)
    @ColumnDefault("0")
    private Long points;

    @Column(nullable = false)
    @ColumnDefault("0")
    private String rating;
    public User(UserSignUpForm form) {
        this.name = form.getName();
        this.email = form.getEmail();
        this.nickname = form.getNickname();
        this.password = form.getPassword();
        this.introduction = form.getIntroduction();
    }

    public User update(UserUpdateForm form) {
        this.name = form.getName();
        this.nickname = form.getNickname();
        this.introduction = form.getIntroduction();
        return this;
    }
}