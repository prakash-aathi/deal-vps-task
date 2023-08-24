package com.dsv.radaptive.dto.response;

import java.util.List;
import java.util.Map;

import lombok.Data;

@Data
public class UserResponse {
    private String message;
    private AccountDTO account;
    private String status;
}

@Data
class AccountDTO {
    private String accountId;
    private String email;
    private String contactNumber;
    private String firstName;
    private String lastName;
    private String deviceType;
    private String deviceId;
    private List<RoleDTO> roles;
    private List<GroupDTO> groups;
}

@Data
class RoleDTO {
    private String description;
    private String roleIdstr;
    private String roleName;
    private int roleId;
    private String tenantId;
    private String tenantRoleName;
    private List<String> layout;
    private List<String> customFilter;
    private String orgId;
    private boolean isDeleted;
    private boolean isActive;
}

@Data
class GroupDTO {
    private String groupDescription;
    private String groupEmail;
    private String groupName;
    private int id;
    private String idstr;
    private boolean isDeleted;
    private boolean isDynamic;
    private String ownerId;
    private String tenantId;
    private String orgId;
    private String queryString;
    private String userQueueIdstr;
    private Map<String, Object> users;
    private String keyword;
    private String costCenter;
    private boolean isActive;
}
