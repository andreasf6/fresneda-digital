package main

import (
	"context"
	"log"
	"os"
	"path"

	"github.com/a-h/templ"
	"github.com/andreasf6/fresneda-digital/internal/infra"
)

func main() {
	// Output path.
	rootPath := "public"
	if err := os.RemoveAll(rootPath); err != nil {
		log.Fatalf("error removing directory")
	}

	if err := os.Mkdir(rootPath, 0755); err != nil {
		log.Fatalf("failed to create output directory: %v", err)
	}

	name := path.Join(rootPath, "index.html")
	index := infra.Main()
	ctx := context.Background()
	err := createPage(ctx, name, index)
	if err != nil {
		log.Fatalf("failed to create page")
	}

	err = os.CopyFS("./public/static", os.DirFS("./static"))
	if err != nil {
		log.Fatalf("ifailed to copy static files")
	}
}

func createPage(ctx context.Context, path string, component templ.Component) error {
	// Create an index page.
	f, err := os.Create(path)
	if err != nil {
		log.Fatalf("failed to create output file: %v", err)
	}
	return component.Render(context.Background(), f)
}
