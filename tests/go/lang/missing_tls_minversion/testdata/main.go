package go_lang_missing_tls_minversion

import (
	"crypto/tls"
	"net/http"
)

// zeroSource is an io.Reader that returns an unlimited number of zero bytes.
type zeroSource struct{}

func (zeroSource) Read(b []byte) (n int, err error) {
	for i := range b {
		b[i] = 0
	}

	return len(b), nil
}

func bad() *tls.Config {
	// bearer:expected go_lang_missing_tls_minversion
	return &tls.Config{}
}

func bad2() *http.Client {
	return &http.Client{
		Transport: &http.Transport{
			// bearer:expected go_lang_missing_tls_minversion
			TLSClientConfig: &tls.Config{
				Certificates: []tls.Certificate{},
			},
		},
	}
}

func good() *http.Client {
	return &http.Client{
		Transport: &http.Transport{
			TLSClientConfig: &tls.Config{
				MinVersion: tls.VersionSSL30,
			},
		},
	}
}

func good2() *http.Client {
	return &http.Client{
		Transport: &http.Transport{
			TLSClientConfig: &tls.Config{
				MinVersion:         tls.VersionTLS10,
				InsecureSkipVerify: true,
			},
		},
	}
}
