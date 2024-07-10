package internal

import (
	"encoding/json"
	"io"
	"net/http"
)

type IssPosition struct {
	Latitude  string `json:"latitude"`
	Longitude string `json:"longitude"`
}

type IssResponse struct {
	Timestamp   int         `json:"timestamp"`
	Message     string      `json:"message"`
	IssPosition IssPosition `json:"iss_position"`
}

// GetISS will return the lat and lon of the ISS
func GetISS() (latLon []string, err error) {
	url := "http://api.open-notify.org/iss-now.json"

	req, _ := http.NewRequest("GET", url, nil)
	res, err := http.DefaultClient.Do(req)

	if res.StatusCode != 200 {
		return nil, err
	} else {
		defer res.Body.Close()

		body, _ := io.ReadAll(res.Body)

		var issResponse IssResponse

		err := json.Unmarshal(body, &issResponse)
		if err != nil {
			return nil, err
		}

		return []string{issResponse.IssPosition.Latitude, issResponse.IssPosition.Longitude}, nil
	}
}
