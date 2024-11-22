export function hasPermission(role: string, action: string): boolean {
    
    const rolePermissions: { [key: string]: string[] } = {
      "ORDINARY_USER": ["comment", "vote", "flag"],
      "CERTIFIED_REVIEWER": ["comment", "vote", "flag", "review"],
      "ASPIRING_REVIEWER":["comment", "vote", "flag", "draft"],
      "MEDIA_AFFILIATE":["comment", "vote", "flag", "review"],
      "TEAM_INSIDER":["comment", "vote", "flag", "review"],
      "ELITE_WRITER":["comment", "vote", "flag", "review"],
    };

    if (!rolePermissions[role]) {
        console.error(`Role "${role}" is not defined in rolePermissions.`);
        return false;
      }
  
    return rolePermissions[role]?.includes(action) || false;
  }
  