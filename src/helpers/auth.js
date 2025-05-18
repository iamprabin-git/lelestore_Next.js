const { ROLE_ADMIN, ROLE_AGENT } = require("@/constants/roles");

export function allowedAdminRoles(roles) {
    return roles?.some((role) => [ROLE_ADMIN, ROLE_AGENT].includes(role));
}

