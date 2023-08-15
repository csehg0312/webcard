package main

import (
	"fmt"
	// "log"
	"errors"
	"io"
	"net/http"
	"os"
)

const keyServerAddr = "serverAddr"

// func getRoot(w http.ResponseWriter, r *http.Request) {
// 	fmt.Printf("got / request\n")
// 	http.FileServer(http.Dir("../../assets"))

// }

func getHello(w http.ResponseWriter, r *http.Request) {
	fmt.Printf("got /hello request\n")
	io.WriteString(w, "Hello, HTTP!\n")
}

func main() {
	fileServer := http.FileServer(http.Dir("../../assets/static"))
	mux := http.NewServeMux()
	mux.Handle("/", fileServer)
	mux.HandleFunc("/hello", getHello)
	// mux.HandleFunc("/", getRoot)
	// mux.HandleFunc("/hello", getHello)
	// http.HandleFunc("/", getRoot)
	// http.HandleFunc("/hello", getHello)

	err := http.ListenAndServe(":3333", mux)
	if errors.Is(err, http.ErrServerClosed) {
		fmt.Printf("server closed\n")
	} else if err != nil {
		fmt.Printf("error starting to overtake: %s\n", err)
		os.Exit(1)
	}
}
