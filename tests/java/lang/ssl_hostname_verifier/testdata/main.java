import javax.net.ssl.X509TrustManager;
import org.apache.http.conn.ssl.SSLSocketFactory;

SSLSocketFactory socketFactory = SSLSocketFactory.getSocketFactory();

// bearer:expected java_lang_ssl_hostname_verifier
HostnameVerifier hostnameVerifier = org.apache.http.conn.ssl.SSLSocketFactory.ALLOW_ALL_HOSTNAME_VERIFIER;

// bearer:expected java_lang_ssl_hostname_verifier
HttpsURLConnection.setDefaultHostnameVerifier(hostnameVerifier);

// bearer:expected java_lang_ssl_hostname_verifier
HttpsURLConnection.setDefaultHostnameVerifier(NoopHostnameVerifier.INSTANCE);

// bearer:expected java_lang_ssl_hostname_verifier
socketFactory.setHostnameVerifier((X509HostnameVerifier) hostnameVerifier);
// bearer:expected java_lang_ssl_hostname_verifier
socketFactory.setDefaultHostnameVerifier((HostnameVerifier) new NullHostnameVerifier());

public class DummyHostnameVerifier implements HostnameVerifier {
  // bearer:expected java_lang_ssl_hostname_verifier
  @Override
  public boolean verify(String s, SSLSession sslSession) {
    return true;
  }
}
HttpsURLConnection.setDefaultHostnameVerifier(new DummyHostnameVerifier());

public void nullKeyManagerForSSLContext(TrustManager[] trustAllCertificates) {
  javax.net.ssl.SSLContext sc = javax.net.ssl.SSLContext.getInstance("SSL");
  // bearer:expected java_lang_ssl_hostname_verifier
  sc.init(null, tm, null);

  javax.net.ssl.SSLContext sc2 = SSLContext.getInstance("SSL");
  // bearer:expected java_lang_ssl_hostname_verifier
  sc2.init(null, tm, null);

  SecureRandom rand = new SecureRandom();
  // bearer:expected java_lang_ssl_hostname_verifier
  sc.init(null, tm, rand);
}

public void disableCommonNameChecking() {
  TLSClientParameters tls = new TLSClientParameters();
  tls.setSSLSocketFactory(sslFactory);
  // bearer:expected java_lang_ssl_hostname_verifier
  tls.setDisableCNCheck(true);
  http.setTlsClientParameters(tls);
}

protected void getAcceptedIssuersOverride() {
  TrustManager[] trustAllCerts = new TrustManager[] {
    new X509TrustManager() {
      // bearer:expected java_lang_ssl_hostname_verifier
      @Override
      public X509Certificate[] getAcceptedIssuers() {
        return new java.security.cert.X509Certificate[] {};
      }

      @Override
      public void checkClientTrusted(X509Certificate[] chain, String authType)
          throws CertificateException {
      }

      @Override
      public void checkServerTrusted(X509Certificate[] chain, String authType)
          throws CertificateException {
      }
    }
  };

  TrustManager[] victimizedManager = new TrustManager[]{
    new X509TrustManager() {
      // bearer:expected java_lang_ssl_hostname_verifier
      public X509Certificate[] getAcceptedIssuers() {
        X509Certificate[] myTrustedAnchors = new X509Certificate[0];
        return myTrustedAnchors;
      }
    }
  };
}

final static HostnameVerifier NO_VERIFY = new HostnameVerifier() {
  // bearer:expected java_lang_ssl_hostname_verifier
  public boolean verify(String hostname, SSLSession session) {
    return true;
  }
};

try {
  HttpsURLConnection.setDefaultHostnameVerifier(new HostnameVerifier() {
    // bearer:expected java_lang_ssl_hostname_verifier
    @Override
    public boolean verify(String s, SSLSession sslSession) {
      return true;
    }
  });
} catch (Exception e) {
  e.printStackTrace();
}

public class MySocketFactorySubClass extends SSLSocketFactory {
  SSLContext sslContext = SSLContext.getInstance("TLS");
  public MySSLSocketFactory(KeyStore truststore) throws NoSuchAlgorithmException, KeyManagementException, KeyStoreException, UnrecoverableKeyException {
    super(truststore);

    TrustManager tm = new X509TrustManager() {
      public void checkClientTrusted(X509Certificate[] chain, String authType) throws CertificateException {
      }

      // bearer:expected java_lang_ssl_hostname_verifier
      public X509Certificate[] getAcceptedIssuers() {
          return null;
      }
  };

    // bearer:expected java_lang_ssl_hostname_verifier
    sslContext.init(null, new TrustManager[] { tm }, null);
  }
}

MySocketFactorySubClass socketFactory = new MySocketFactorySubClass(trustStore);
// TODO bearer expected java_lang_ssl_hostname_verifier
socketFactory.setHostnameVerifier(MySocketFactorySubClass.ALLOW_ALL_HOSTNAME_VERIFIER);
