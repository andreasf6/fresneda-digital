package domain

// Experience represents a work experience entry
type Experience struct {
	Company      string
	Role         string
	StartDate    string
	EndDate      string
	Description  string
	Technologies []string
	Logo         string
}

// GetExperiences returns all work experiences
// This can be easily extended to load from a database or external file
func GetExperiences() []Experience {
	return []Experience{
		{
			Company:      "University of Southampton",
			Role:         "MEng Computer Science with Image and Multimedia Systems",
			StartDate:    "2017",
			EndDate:      "2021",
			Description:  "Graduated with First Class Honours",
			Technologies: []string{"Open Data", "Computational Finance", "Image Processing", "ML"},
			Logo:         "/static/images/uos.png",
		},
		{
			Company:      "Publicis Sapient",
			Role:         "Full Stack Engineer",
			StartDate:    "2020",
			EndDate:      "2025",
			Description:  "Full-stack development for various clients, including financial services, retail, and travel & hospitality, with a focus on scalability, user experience and cutting-edge technology (inc. SSI and blockchain)",
			Technologies: []string{"Golang", "Typescript", "Kotlin", "Java", "Python", "React", "Cloud services", "Docker"},
			Logo:         "/static/images/publicis-sapient-logo.png",
		},
		{
			Company:      "Neoke",
			Role:         "Product Engineer",
			StartDate:    "2025",
			EndDate:      "Present",
			Description:  "Building solutions in the travel & hospitality sector using Self Sovereign Identity (SSI) technology, enabling seamless, secure, and privacy-preserving digital interactions across the whole e2e user journey",
			Technologies: []string{"TypeScript", "Node.js", "FinalCutPro", "Figma"},
			Logo:         "/static/images/neoke-logo.png",
		},
	}
}
