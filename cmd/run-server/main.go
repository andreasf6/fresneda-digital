package main

import (
	"fmt"
	"net/http"

	"github.com/a-h/templ"
	"github.com/andreasf6/fresneda-digital/internal/infra"
)

func main() {
	component := infra.Main()

	http.Handle("/static/", http.StripPrefix("/static/", http.FileServer(http.Dir("./static"))))

	http.Handle("/", templ.Handler(component))
	http.Handle("/pagetwo.html", templ.Handler(infra.PageTwo()))

	fmt.Println("Listening on :3000")
	http.ListenAndServe(":3000", nil)
}
