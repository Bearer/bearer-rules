// Use bearer:expected java_lang_deserialization_of_user_input to flag expected findings

import java.beans.XMLDecoder;
import java.io.InputStream;
import java.io.ObjectInputStream;
import com.thoughtworks.xstream.XStream;

public class Foo {
  public static void bad(InputStream in) {
    XMLDecoder d = new XMLDecoder(in);
    // bearer:expected java_lang_deserialization_of_user_input
    Object result = d.readObject();
    d.close();
  }

  public static void bad2(HttpServletRequest req, HttpServletResponse res) {
    XMLDecoder d = new XMLDecoder(req.getInputStream());
    // bearer:expected java_lang_deserialization_of_user_input
    Object result = d.readObject();
    d.close();
  }

  public Object bad3(InputStream in) {
    XStream xs = new XStream();
    // bearer:expected java_lang_deserialization_of_user_input
    return xs.fromXML(in);
  }

  protected void bad4(HttpServletRequest req, HttpServletResponse res) {
    ObjectInputStream s = new ObjectInputStream(req.getInputStream());
    // bearer:expected java_lang_deserialization_of_user_input
    Object result = s.read();
  }

  public static void ok(String filename) {
    InputStream in = XmlDecodeUtil.class.getResourceAsStream(filename);
    XMLDecoder d = new XMLDecoder(in);
    Object result = d.readObject();
    d.close();
  }
}