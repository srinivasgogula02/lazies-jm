import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { BookOpen, Target, Zap, Brain, Star, Heart, Sparkles } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <header className="relative border-b-4 border-primary bg-background">
        <div className="absolute top-0 left-0 w-32 h-32 bg-accent/10 organic-shape -z-10"></div>
        <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 organic-shape -z-10"></div>
        <div className="container mx-auto px-4 py-6 flex items-center justify-between relative z-10">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Brain className="h-8 w-8 text-primary wiggle" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full animate-pulse"></div>
            </div>
            <span className="text-2xl font-bold text-foreground handwritten-title">Lazies</span>
            <div className="hidden sm:block text-xs bg-accent text-accent-foreground px-2 py-1 rounded-full rotate-12 handwritten">
              lazies.xyz
            </div>
          </div>
          <Button className="hand-drawn bg-accent hover:bg-accent/90 text-accent-foreground font-bold hover:scale-105 transition-transform handwritten-bold">
            Join the Vibe ✨
          </Button>
        </div>
      </header>

      <section className="relative container mx-auto px-4 py-20 text-center">
        <div className="absolute top-10 left-10 w-16 h-16 bg-primary/20 organic-shape float"></div>
        <div className="absolute top-20 right-20 w-12 h-12 bg-accent/20 organic-shape bounce-subtle"></div>
        <div className="absolute bottom-10 left-1/4 w-8 h-8 bg-secondary/30 rounded-full animate-ping"></div>

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="inline-block mb-4">
            <span className="bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium border-2 border-accent/20 hand-drawn handwritten">
              YouTube is mid 💀
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight handwritten-title">
            Stop the
            <br />
            <span className="text-primary relative">
              Scroll Trap
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-accent/50 rounded-full transform -rotate-1"></div>
            </span>
            <br />
            <span className="text-accent">Start Learning</span>
          </h1>

          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed handwritten">
            Tired of falling into YouTube rabbit holes? 🐰 We curate the actually good educational content so you can
            <span className="text-primary font-semibold"> level up your brain</span> instead of rotting it.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button
              size="lg"
              className="hand-drawn bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-4 font-bold hover:scale-105 transition-transform handwritten-bold"
            >
              Get Early Access <Sparkles className="ml-2 h-5 w-5" />
            </Button>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Heart className="h-4 w-4 text-accent animate-pulse" />
              <span className="text-sm handwritten">Launching Soon (no cap)</span>
            </div>
          </div>

          <div className="flex justify-center items-center gap-6 text-sm text-muted-foreground handwritten">
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 text-accent" />
              <span>No clickbait</span>
            </div>
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 text-primary" />
              <span>No brain rot</span>
            </div>
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 text-accent" />
              <span>Just vibes</span>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-muted py-16 relative">
        <div className="absolute top-0 left-0 w-40 h-40 bg-accent/5 organic-shape"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4 handwritten-title">We've All Been There... 😭</h2>
            <p className="text-lg text-muted-foreground handwritten">
              You open YouTube to learn something useful and 3 hours later you're watching "Why Penguins Can't Fly" 🐧
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Before */}
            <Card className="hand-drawn border-4 border-destructive/30 bg-destructive/5 transform -rotate-1 hover:rotate-0 transition-transform">
              <CardContent className="p-8 text-center">
                <div className="text-6xl mb-4">😵‍💫</div>
                <h3 className="text-2xl font-bold text-destructive mb-4 handwritten-title">The YouTube Trap</h3>
                <ul className="text-left space-y-3 text-card-foreground handwritten">
                  <li className="flex items-start gap-2">
                    <span className="text-destructive">💀</span>
                    <span>Start: "Learn Python" → End: "Cat videos compilation #47"</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-destructive">🌀</span>
                    <span>Algorithm keeps you scrolling forever</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-destructive">😴</span>
                    <span>Brain = mush, goals = forgotten</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-destructive">⏰</span>
                    <span>3 hours gone, nothing learned</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* After */}
            <Card className="hand-drawn border-4 border-primary/30 bg-primary/5 transform rotate-1 hover:rotate-0 transition-transform">
              <CardContent className="p-8 text-center">
                <div className="text-6xl mb-4">🧠✨</div>
                <h3 className="text-2xl font-bold text-primary mb-4 handwritten-title">The Lazies Way</h3>
                <ul className="text-left space-y-3 text-card-foreground handwritten">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">🎯</span>
                    <span>Curated content that actually matters</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">🚫</span>
                    <span>Zero distracting recommendations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">📈</span>
                    <span>Track progress, see real growth</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">⚡</span>
                    <span>Learn faster, remember more</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-20 relative">
        <div className="absolute top-10 right-10 w-20 h-20 bg-accent/10 organic-shape float"></div>

        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4 handwritten-title">How We Keep You Focused 🎯</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto handwritten">
            Three simple steps to escape the scroll trap and actually learn something
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Step 1 */}
          <Card className="hand-drawn border-3 border-primary/30 bg-card hover:scale-105 transition-transform transform rotate-1 hover:rotate-0">
            <CardContent className="p-8 text-center">
              <div className="bg-primary/10 w-20 h-20 organic-shape flex items-center justify-center mx-auto mb-6 bounce-subtle">
                <Target className="h-10 w-10 text-primary" />
              </div>
              <div className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-bold mb-4 inline-block">
                STEP 1
              </div>
              <h3 className="text-2xl font-bold mb-4 text-card-foreground handwritten-title">Pick Your Vibe</h3>
              <p className="text-muted-foreground handwritten">
                Tell us what you want to learn - coding, design, business, or whatever gets you hyped 🔥
              </p>
            </CardContent>
          </Card>

          {/* Step 2 */}
          <Card className="hand-drawn border-3 border-accent/30 bg-card hover:scale-105 transition-transform transform -rotate-1 hover:rotate-0">
            <CardContent className="p-8 text-center">
              <div className="bg-accent/10 w-20 h-20 organic-shape flex items-center justify-center mx-auto mb-6 wiggle">
                <Zap className="h-10 w-10 text-accent" />
              </div>
              <div className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-bold mb-4 inline-block">
                STEP 2
              </div>
              <h3 className="text-2xl font-bold mb-4 text-card-foreground handwritten-title">
                We Curate the Good Stuff
              </h3>
              <p className="text-muted-foreground handwritten">
                Our AI finds the best educational content and filters out all the random nonsense ✨
              </p>
            </CardContent>
          </Card>

          {/* Step 3 */}
          <Card className="hand-drawn border-3 border-primary/30 bg-card hover:scale-105 transition-transform transform rotate-1 hover:rotate-0">
            <CardContent className="p-8 text-center">
              <div className="bg-primary/10 w-20 h-20 organic-shape flex items-center justify-center mx-auto mb-6 float">
                <BookOpen className="h-10 w-10 text-primary" />
              </div>
              <div className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-bold mb-4 inline-block">
                STEP 3
              </div>
              <h3 className="text-2xl font-bold mb-4 text-card-foreground handwritten-title">Level Up Daily</h3>
              <p className="text-muted-foreground handwritten">
                Follow your personalized learning path and watch yourself actually get better at stuff 📈
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="bg-gradient-to-br from-primary via-accent to-primary py-20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-60 h-60 bg-white/10 organic-shape"></div>
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-white/10 organic-shape"></div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-3xl mx-auto">
            <div className="text-6xl mb-6">🚀</div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 handwritten-title">
              Ready to Escape the Scroll Trap?
            </h2>
            <p className="text-white/90 mb-8 text-xl leading-relaxed handwritten">
              Join <span className="font-bold">2,847 people</span> who are done with brain rot and ready to actually
              learn something cool.
              <br />
              <span className="text-sm opacity-80">(No spam, we promise - we're not that type of company 💯)</span>
            </p>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-md mx-auto hand-drawn border-4 border-white/20">
              <div className="flex flex-col gap-4">
                <Input
                  type="email"
                  placeholder="your.email@example.com"
                  className="bg-white border-0 text-foreground text-lg py-3 rounded-xl handwritten"
                />
                <Button className="bg-white text-primary hover:bg-white/90 font-bold text-lg py-3 rounded-xl hover:scale-105 transition-transform handwritten-bold">
                  Get Early Access ✨
                </Button>
              </div>
              <p className="text-white/70 text-xs mt-4 handwritten">
                We'll send you a magic link when we launch (probably next month)
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-background border-t-4 border-primary py-12 relative">
        <div className="absolute top-0 left-1/4 w-16 h-16 bg-accent/10 organic-shape"></div>
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center space-x-3 mb-6">
              <Brain className="h-8 w-8 text-primary wiggle" />
              <span className="text-2xl font-bold text-foreground handwritten-title">Lazies</span>
              <div className="text-xs bg-accent text-accent-foreground px-2 py-1 rounded-full rotate-12 handwritten">
                lazies.xyz
              </div>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md text-lg handwritten">
              Making learning cool again, one curated video at a time 📚✨
            </p>
            <div className="flex gap-4 text-sm text-muted-foreground handwritten">
              <span>Made with 💜 for learners</span>
              <span>•</span>
              <span>No cap, just facts</span>
              <span>•</span>
              <span>© 2025 Lazies</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
