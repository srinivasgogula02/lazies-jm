"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { BookOpen, Target, Zap, Star, Heart, Sparkles } from "lucide-react"
import { createClient } from "@/lib/supabase/client"
import { useState, useEffect } from "react"

export default function HomePage() {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState("")
  const [isSuccess, setIsSuccess] = useState(false)
  const [peopleCount, setPeopleCount] = useState(284)

  const fetchWaitlistCount = async () => {
    const supabase = createClient()
    try {
      const { count } = await supabase.from("waitlist").select("*", { count: "exact", head: true })

      setPeopleCount(284 + (count || 0))
    } catch (error) {
      console.error("Error fetching waitlist count:", error)
      setPeopleCount(284)
    }
  }

  useEffect(() => {
    fetchWaitlistCount()
  }, [])

  const handleWaitlistSignup = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsLoading(true)
    setMessage("")

    const supabase = createClient()

    try {
      const { error } = await supabase.from("waitlist").insert([{ email }])

      if (error) {
        if (error.code === "23505") {
          setMessage("You're already on the list! 🎉")
          setIsSuccess(true)
        } else {
          throw error
        }
      } else {
        setMessage("Welcome to the vibe! We'll hit you up when we launch 🚀")
        setIsSuccess(true)
        setEmail("")
        fetchWaitlistCount()
      }
    } catch (error) {
      console.error("Waitlist signup error:", error)
      setMessage("Oops, something went wrong. Try again? 😅")
      setIsSuccess(false)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <header className="relative border-b-4 border-primary bg-background">
        <div className="absolute top-0 left-0 w-32 h-32 bg-accent/10 organic-shape -z-10"></div>
        <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 organic-shape -z-10"></div>
        <div className="container mx-auto px-4 py-6 flex items-center justify-between relative z-10">
          <div className="flex items-center space-x-3">
            <span className="text-2xl font-bold text-foreground brand-handwritten">Lazies</span>
          </div>
          <Button
            onClick={() => document.getElementById("waitlist-form")?.scrollIntoView({ behavior: "smooth" })}
            className="hand-drawn bg-accent hover:bg-accent/90 text-accent-foreground font-bold hover:scale-105 transition-transform"
          >
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
            <span className="bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium border-2 border-accent/20 hand-drawn">
              YouTube is mid 💀
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
            Stop the
            <br />
            <span className="text-primary relative">
              Scroll Trap
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-accent/50 rounded-full transform -rotate-1"></div>
            </span>
            <br />
            <span className="text-accent">Start Learning</span>
          </h1>

          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Tired of falling into YouTube rabbit holes? 🐰 We curate the actually good educational content so you can
            <span className="text-primary font-semibold"> level up your brain</span> instead of rotting it.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button
              onClick={() => document.getElementById("waitlist-form")?.scrollIntoView({ behavior: "smooth" })}
              size="lg"
              className="hand-drawn bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-4 font-bold hover:scale-105 transition-transform"
            >
              Get Early Access <Sparkles className="ml-2 h-5 w-5" />
            </Button>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Heart className="h-4 w-4 text-accent animate-pulse" />
              <span className="text-sm">Launching Soon (no cap)</span>
            </div>
          </div>

          <div className="flex justify-center items-center gap-6 text-sm text-muted-foreground">
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
            <h2 className="text-4xl font-bold text-foreground mb-4">We've All Been There... 😭</h2>
            <p className="text-lg text-muted-foreground">
              You open YouTube to learn something useful and 3 hours later you're watching "Why Penguins Can't Fly" 🐧
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="hand-drawn border-4 border-destructive/30 bg-destructive/5 transform -rotate-1 hover:rotate-0 transition-transform">
              <CardContent className="p-8 text-center">
                <div className="text-6xl mb-4">😵‍💫</div>
                <h3 className="text-2xl font-bold text-destructive mb-4">The YouTube Trap</h3>
                <ul className="text-left space-y-3 text-card-foreground">
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

            <Card className="hand-drawn border-4 border-primary/30 bg-primary/5 transform rotate-1 hover:rotate-0 transition-transform">
              <CardContent className="p-8 text-center">
                <div className="text-6xl mb-4">🧠✨</div>
                <h3 className="text-2xl font-bold text-primary mb-4">The Lazies Way</h3>
                <ul className="text-left space-y-3 text-card-foreground">
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
          <h2 className="text-4xl font-bold text-foreground mb-4">How We Keep You Focused 🎯</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Three simple steps to escape the scroll trap and actually learn something
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="hand-drawn border-3 border-primary/30 bg-card hover:scale-105 transition-transform transform rotate-1 hover:rotate-0">
            <CardContent className="p-8 text-center">
              <div className="bg-primary/10 w-20 h-20 organic-shape flex items-center justify-center mx-auto mb-6 bounce-subtle">
                <Target className="h-10 w-10 text-primary" />
              </div>
              <div className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-bold mb-4 inline-block">
                STEP 1
              </div>
              <h3 className="text-2xl font-bold mb-4 text-card-foreground">Pick Your Vibe</h3>
              <p className="text-muted-foreground">
                Tell us what you want to learn - coding, design, business, or whatever gets you hyped 🔥
              </p>
            </CardContent>
          </Card>

          <Card className="hand-drawn border-3 border-accent/30 bg-card hover:scale-105 transition-transform transform -rotate-1 hover:rotate-0">
            <CardContent className="p-8 text-center">
              <div className="bg-accent/10 w-20 h-20 organic-shape flex items-center justify-center mx-auto mb-6 wiggle">
                <Zap className="h-10 w-10 text-accent" />
              </div>
              <div className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-bold mb-4 inline-block">
                STEP 2
              </div>
              <h3 className="text-2xl font-bold mb-4 text-card-foreground">We Curate the Good Stuff</h3>
              <p className="text-muted-foreground">
                Our AI finds the best educational content and filters out all the random nonsense ✨
              </p>
            </CardContent>
          </Card>

          <Card className="hand-drawn border-3 border-primary/30 bg-card hover:scale-105 transition-transform transform rotate-1 hover:rotate-0">
            <CardContent className="p-8 text-center">
              <div className="bg-primary/10 w-20 h-20 organic-shape flex items-center justify-center mx-auto mb-6 float">
                <BookOpen className="h-10 w-10 text-primary" />
              </div>
              <div className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-bold mb-4 inline-block">
                STEP 3
              </div>
              <h3 className="text-2xl font-bold mb-4 text-card-foreground">Level Up Daily</h3>
              <p className="text-muted-foreground">
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
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Escape the Scroll Trap?</h2>
            <p className="text-white/90 mb-8 text-xl leading-relaxed">
              Join <span className="font-bold">{peopleCount} people</span> who are done with brain rot and ready to
              actually learn something cool.
              <br />
              <span className="text-sm opacity-80">(No spam, we promise - we're not that type of company 💯)</span>
            </p>

            <div
              id="waitlist-form"
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-md mx-auto hand-drawn border-4 border-white/20"
            >
              <form onSubmit={handleWaitlistSignup} className="flex flex-col gap-4">
                <Input
                  type="email"
                  placeholder="your.email@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white border-0 text-foreground text-lg py-3 rounded-xl"
                  required
                  disabled={isLoading}
                />
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="bg-white text-primary hover:bg-white/90 font-bold text-lg py-3 rounded-xl hover:scale-105 transition-transform"
                >
                  {isLoading ? "Joining..." : "Get Early Access ✨"}
                </Button>
              </form>
              {message && <p className={`text-sm mt-4 ${isSuccess ? "text-white" : "text-red-200"}`}>{message}</p>}
              <p className="text-white/70 text-xs mt-4">
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
              <span className="text-2xl font-bold text-foreground brand-handwritten">Lazies</span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md text-lg">
              Making learning cool again, one curated video at a time 📚✨
            </p>
            <div className="flex gap-4 text-sm text-muted-foreground">
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
