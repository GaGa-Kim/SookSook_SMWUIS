package com.smwuis.sooksook.web.dto.user;

import com.smwuis.sooksook.domain.user.UserSchedule;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;

import java.util.Date;

@Getter
public class UserScheduleResponseDto {

    @ApiModelProperty(example = "2022-07-28")
    private Date period;

    @ApiModelProperty(example = "내용")
    private String content;

    @ApiModelProperty(example = "완료 유무")
    private boolean finish;

    public UserScheduleResponseDto(UserSchedule userSchedule) {
        period = userSchedule.getPeriod();
        content = userSchedule.getContent();
        finish = userSchedule.isFinish();
    }
}
