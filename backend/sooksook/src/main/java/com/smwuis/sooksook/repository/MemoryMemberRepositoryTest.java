//package com.smwuis.sooksook.repository;
//
//import com.smwuis.sooksook.domain.user.Member;
//import org.assertj.core.api.Assertions;
//import org.junit.jupiter.api.AfterEach;
//import org.junit.jupiter.api.Test;
//
//import java.util.List;
//import java.util.Optional;
//
//import static org.assertj.core.api.Assertions.*;
//
//class MemoryMemberRepositoryTest {
//
//    MemoryMemberRepository repository = new MemoryMemberRepository();
//
//    // 하나의 테스트를 진행하고 repository를 비우는 메서드.
//    // 테스트 후 repository에 객체가 남아있기 때문에 다음 테스트를 진행할 때 에러가 발생할 수 있다.
//    // @AfterEach : 메서드 실행이 끝날 때 마다 한 번씩 동작하는 콜백 메서드
//    @AfterEach
//    public void afterEach(){
//        repository.clearStore();
//    }
//
//
//    @Test
//    public void save(){
//        Member member = new Member();
//        member.setName("spring");
//
//        repository.save(member);
//
//        Member result = repository.findById(member.getId()).get();
//        assertThat(member).isEqualTo(result);
//        //Assertions.assertEquals(member, result);
//    }
//
//    @Test
//    public void findByName(){
//        Member member1 = new Member();
//        member1.setName("spring1");
//        repository.save(member1);
//
//        Member member2 = new Member();
//        member2.setName("spring2");
//        repository.save(member2);
//
//
//        Member result = repository.findByName("spring1").get();
//        assertThat(result).isEqualTo(member1);
//    }
//
//    @Test
//    public void findAll(){
//        Member member1 = new Member();
//        member1.setName("spring1");
//        repository.save(member1);
//
//        Member member2 = new Member();
//        member2.setName("spring2");
//        repository.save(member2);
//
//        List<Member> result = repository.findAll();
//
//        assertThat(result.size()).isEqualTo(2);
//    }
//
//}
//
