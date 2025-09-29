import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Eye, X, Calendar, Tag, Code } from "lucide-react";
import { getFeaturedProjects, projects } from "../data/projects";
import type { Project } from "../data/projects";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isAboutExpanded, setIsAboutExpanded] = useState(false);
  const featuredProjects = getFeaturedProjects();
  const otherProjects = projects.filter((project) => !project.featured);

  const openProjectModal = (project: Project) => {
    setSelectedProject(project);
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
  };

  useEffect(() => {
    // Reset expanded state whenever a new project is opened/closed
    setIsAboutExpanded(false);
  }, [selectedProject]);

  return (
    <>
      <section id="projects" className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Featured Projects</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Here are some of my recent projects that showcase my skills and passion for creating innovative solutions.</p>
          </div>

          {/* Featured Projects */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {featuredProjects.map((project) => (
              <div key={project.id} className="bg-card border rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer" onClick={() => openProjectModal(project)}>
                <div className="h-48 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                  {project.thumbnail ? <img src={project.thumbnail} alt={project.title} className="w-full h-full object-cover" /> : <span className="text-6xl">💻</span>}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">{project.title}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    {project.liveUrl && (
                      <Button
                        size="sm"
                        variant="outline"
                        className="flex items-center gap-2"
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(project.liveUrl, "_blank");
                        }}
                      >
                        <Eye className="h-4 w-4" />
                        Live Demo
                      </Button>
                    )}
                    {project.githubUrl && (
                      <Button
                        size="sm"
                        variant="outline"
                        className="flex items-center gap-2"
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(project.githubUrl, "_blank");
                        }}
                      >
                        <Github className="h-4 w-4" />
                        Code
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Other Projects */}
          <div>
            <h3 className="text-2xl font-semibold text-foreground text-center mb-8">Other Projects</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project) => (
                <div key={project.id} className="bg-card border rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer" onClick={() => openProjectModal(project)}>
                  <div className="h-32 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                    {project.thumbnail ? <img src={project.thumbnail} alt={project.title} className="w-full h-full object-cover" /> : <span className="text-4xl">💻</span>}
                  </div>
                  <div className="p-4">
                    <h4 className="text-lg font-semibold text-foreground mb-2">{project.title}</h4>
                    <p className="text-muted-foreground text-sm mb-3 line-clamp-3">{project.description}</p>
                    <div className="flex flex-wrap gap-1 mb-3">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span key={tech} className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && <span className="px-2 py-1 bg-muted text-muted-foreground rounded-full text-xs font-medium">+{project.technologies.length - 3}</span>}
                    </div>
                    <div className="flex gap-2">
                      {project.liveUrl && (
                        <Button
                          size="sm"
                          variant="ghost"
                          className="flex items-center gap-1 text-xs"
                          onClick={(e) => {
                            e.stopPropagation();
                            window.open(project.liveUrl, "_blank");
                          }}
                        >
                          <ExternalLink className="h-3 w-3" />
                          Demo
                        </Button>
                      )}
                      {project.githubUrl && (
                        <Button
                          size="sm"
                          variant="ghost"
                          className="flex items-center gap-1 text-xs"
                          onClick={(e) => {
                            e.stopPropagation();
                            window.open(project.githubUrl, "_blank");
                          }}
                        >
                          <Github className="h-3 w-3" />
                          Code
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <Button
              size="lg"
              onClick={() => {
                window.open("https://github.com/avicenan", "_blank");
              }}
              className="flex items-center gap-2 mx-auto"
            >
              <Github className="h-5 w-5" />
              View More on GitHub
            </Button>
          </div>
        </div>
      </section>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50" onClick={closeProjectModal}>
          <div className="bg-card border rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            {/* Modal Header */}
            <div className="p-6 border-b flex justify-between items-start">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-2">{selectedProject.title}</h2>
                <p className="text-muted-foreground">{selectedProject.description}</p>
              </div>
              <Button variant="ghost" size="sm" onClick={closeProjectModal} className="flex items-center gap-2">
                <X className="h-4 w-4" />
              </Button>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              {/* Project Image */}
              {/* <div className="mb-6">
                {selectedProject.image ? (
                  <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-64 object-cover rounded-lg" />
                ) : (
                  <div className="w-full h-64 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg flex items-center justify-center">
                    <span className="text-6xl">💻</span>
                  </div>
                )}
              </div> */}
              <div className={`mb-6 ${selectedProject.images && selectedProject.images.length > 1 ? "px-10" : ""}`}>
                {selectedProject.images && selectedProject.images.length > 0 ? (
                  <Carousel className="">
                    <CarouselContent>
                      {selectedProject.images?.map((image) => (
                        <CarouselItem key={image}>
                          <img src={image} alt={selectedProject.title} className="w-full h-64 object-contain bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg" />
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    {selectedProject.images.length > 1 && (
                      <>
                        <CarouselPrevious />
                        <CarouselNext />
                      </>
                    )}
                  </Carousel>
                ) : (
                  <div className="w-full h-64 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg flex items-center justify-center">
                    <span className="text-6xl">💻</span>
                  </div>
                )}
              </div>

              {/* Project Details */}
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                {/* Left Column */}
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                      <Code className="h-5 w-5" />
                      About This Project
                    </h3>
                    {(() => {
                      const fullText = selectedProject.longDescription || selectedProject.description;
                      const shouldClamp = fullText.length > 220 && !isAboutExpanded;
                      return (
                        <>
                          <p className={`text-muted-foreground leading-relaxed ${shouldClamp ? "line-clamp-5" : ""}`}>{fullText}</p>
                          {fullText.length > 220 && (
                            <Button variant="ghost" size="sm" className="mt-2 px-0 text-primary" onClick={() => setIsAboutExpanded((prev) => !prev)}>
                              {isAboutExpanded ? "Show Less" : "Read More"}
                            </Button>
                          )}
                        </>
                      );
                    })()}
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                      <Tag className="h-5 w-5" />
                      Technologies Used
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech) => (
                        <span key={tech} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                      <Calendar className="h-5 w-5" />
                      Project Details
                    </h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Category:</span>
                        <span className="font-medium capitalize">{selectedProject.category}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Year:</span>
                        <span className="font-medium">{selectedProject.year}</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">Tags</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tags.map((tag) => (
                        <span key={tag} className="px-2 py-1 bg-muted text-muted-foreground rounded-full text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 pt-6 border-t">
                {selectedProject.liveUrl && (
                  <Button className="flex items-center gap-2" onClick={() => window.open(selectedProject.liveUrl, "_blank")}>
                    <Eye className="h-4 w-4" />
                    View Live Demo
                  </Button>
                )}
                {selectedProject.githubUrl && (
                  <Button variant="outline" className="flex items-center gap-2" onClick={() => window.open(selectedProject.githubUrl, "_blank")}>
                    <Github className="h-4 w-4" />
                    View Source Code
                  </Button>
                )}
                <Button variant="ghost" onClick={closeProjectModal}>
                  Close
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
