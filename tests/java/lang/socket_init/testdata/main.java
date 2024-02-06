import java.net.Socket;
import java.net.SocketFactory;

 public static boolean bad(String host, int port, int timeout) {
  // bearer:expected java_lang_socket_init
  try (Socket socket = new Socket()) {
    socket.connect(new InetSocketAddress(host, port), timeout);
    return true;
  } catch (IOException e) {
    return false;
  }
}

private void bad2() {
  // bearer:expected java_lang_socket_init
  Socket soc = new java.net.Socket("localhost", 9999);
}

public Socket ok(String host, int port, InetAddress localAddress, int localPort) throws IOException {
  SocketFactory socketfactory = getSSLContext().getSocketFactory();
  return socketfactory.createSocket(host, port, localAddress, localPort);
}