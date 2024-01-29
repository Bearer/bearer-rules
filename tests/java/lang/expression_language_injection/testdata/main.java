import javax.el.*;

public class ELInjection {

    public String bad(String externalInput) {
        ExpressionFactory expressionFactory = context.getApplication().getExpressionFactory();
        ELContext elContext = context.getELContext();

        // bearer:expected java_lang_expression_language_injection
        ValueExpression valueExp = expressionFactory.createValueExpression(elContext, externalInput, String.class);
        // bearer:expected java_lang_expression_language_injection
        ValueExpression valueExp = expressionFactory.createValueExpression(elContext, externalInput);
        // bearer:expected java_lang_expression_language_injection
        MethodExpression methodExp = expressionFactory.createMethodExpression(elContext, externalInput, String.class, null);

        return (String) valEx.getValue(elContext);
    }

    public MethodInfo methodExpr(String expression) {
        FacesContext context = FacesContext.getCurrentInstance();
        ExpressionFactory expressionFactory = context.getApplication().getExpressionFactory();
        ELContext elContext = context.getELContext();

        // ok
        String safe = "hello world";
        MethodExpression ex = expressionFactory.createMethodExpression(elContext, safe, String.class, null);
        return ex.getMethodInfo(elContext);
    }

}
