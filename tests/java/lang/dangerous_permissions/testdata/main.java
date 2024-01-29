// License: LGPL-3.0 License (c) find-sec-bugs
package perm;
import java.lang.reflect.ReflectPermission;
import java.security.CodeSource;
import java.security.PermissionCollection;
import java.util.ArrayList;
import java.util.List;

public class DangerousPermissions {
    public void bad(CodeSource codesource) {
        PermissionCollection coll = super.getPermissions(codesource);
        // bearer:expected java_lang_dangerous_permissions
        coll.add(new ReflectPermission("suppressAccessChecks"));
        // bearer:expected java_lang_dangerous_permissions
        coll.add(new RuntimePermission("createClassLoader"));
        RuntimePermission perm = new RuntimePermission("createClassLoader");
        // bearer:expected java_lang_dangerous_permissions
        coll.add(perm);
        ReflectPermission p = new ReflectPermission("suppressAccessChecks");
        // bearer:expected java_lang_dangerous_permissions
        coll.add(p);
    }

    public void ok(CodeSource codesource) {
        RuntimePermission permission = new RuntimePermission("createClassLoader");
        List<RuntimePermission> list = new ArrayList<>();
        list.add(permission);

        ReflectPermission perm = new ReflectPermission("newProxyInPackage");
        PermissionCollection pc = super.getPermissions(codesource);
        pc.add(perm);
    }
}
