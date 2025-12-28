import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Anvil, ArrowRight, Github, Zap, Lock, GitBranch, CheckCircle2, Code2, Terminal, Boxes } from "lucide-react"
import Link from "next/link"

export default function ForgeLandingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 h-16 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="container mx-auto px-4 h-full flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Anvil className="w-6 h-6 text-indigo-600" />
            <span className="text-xl font-semibold text-slate-900">FORGE</span>
          </Link>

          {/* Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="#features" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">
              Features
            </Link>
            <Link href="#docs" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">
              Docs
            </Link>
            <Link href="#pricing" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">
              Pricing
            </Link>
            <Link href="#blog" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">
              Blog
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="flex items-center gap-4">
            <Button variant="ghost" className="text-slate-600 hover:text-slate-900">
              Sign In
            </Button>
            <Button className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg px-4 py-2">Get Started</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          {/* Badge */}
          <Badge className="bg-indigo-50 text-indigo-700 hover:bg-indigo-100 border-0 rounded-full px-4 py-1 mb-6">
            <Github className="w-3 h-3 mr-1.5" />
            Now with GitHub Actions support
          </Badge>

          {/* Headline */}
          <h1 className="text-5xl md:text-6xl font-semibold text-slate-900 tracking-tight mb-6 text-balance">
            Deploy with confidence
          </h1>

          {/* Subtext */}
          <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto text-balance">
            The modern CI/CD platform that helps teams ship faster. Build, test, and deploy in minutes, not hours.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 text-base rounded-lg">
              Start for Free
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button
              variant="outline"
              className="text-slate-700 border-slate-300 hover:bg-slate-50 px-6 py-3 text-base rounded-lg bg-transparent"
            >
              Read Docs
            </Button>
          </div>

          {/* Hero Visual */}
          <div className="relative rounded-xl overflow-hidden shadow-2xl shadow-slate-900/10 border border-slate-200">
            <img
              src="https://placehold.co/1200x675?text=Modern+CI+CD+dashboard+interface+with+pipeline+visualization+showing+build+test+deploy+stages+dark+theme+with+green+success+indicators"
              alt="Modern CI CD dashboard interface with pipeline visualization showing build test deploy stages dark theme with green success indicators"
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-12 border-y border-slate-100 bg-slate-50/50">
        <div className="container mx-auto px-4">
          <p className="text-center text-sm text-slate-500 mb-8">Trusted by teams at</p>
          <div className="flex flex-wrap items-center justify-center gap-12 opacity-60">
            <div className="text-2xl font-semibold text-slate-400">Acme Corp</div>
            <div className="text-2xl font-semibold text-slate-400">TechFlow</div>
            <div className="text-2xl font-semibold text-slate-400">DataSync</div>
            <div className="text-2xl font-semibold text-slate-400">CloudBase</div>
            <div className="text-2xl font-semibold text-slate-400">DevOps Inc</div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-semibold text-slate-900 mb-4">Everything you need to ship faster</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              From code to production in minutes with powerful automation and enterprise-grade security.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="p-6 rounded-xl hover:bg-slate-50 transition-colors">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Lightning Fast Builds</h3>
              <p className="text-slate-600">
                Smart caching and parallel execution make your builds up to 10x faster than traditional CI/CD.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-6 rounded-xl hover:bg-slate-50 transition-colors">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <Lock className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Enterprise Security</h3>
              <p className="text-slate-600">
                SOC 2 compliant with end-to-end encryption, secret management, and audit logs.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-6 rounded-xl hover:bg-slate-50 transition-colors">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <GitBranch className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Git Native</h3>
              <p className="text-slate-600">
                Deep integration with GitHub, GitLab, and Bitbucket. Automatic PR previews and deployments.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="p-6 rounded-xl hover:bg-slate-50 transition-colors">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle2 className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Zero Config</h3>
              <p className="text-slate-600">
                Auto-detect your project and configure optimal build settings. Get started in seconds.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="p-6 rounded-xl hover:bg-slate-50 transition-colors">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <Terminal className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Powerful CLI</h3>
              <p className="text-slate-600">
                Control everything from your terminal with our intuitive CLI. Perfect for automation.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="p-6 rounded-xl hover:bg-slate-50 transition-colors">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <Boxes className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Any Stack</h3>
              <p className="text-slate-600">
                Support for all major frameworks and languages. Docker, Kubernetes, serverless, and more.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Code Example Section */}
      <section className="py-24 px-4 bg-slate-50">
        <div className="container mx-auto max-w-5xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-semibold text-slate-900 mb-4">Simple configuration, powerful results</h2>
              <p className="text-lg text-slate-600 mb-6">
                Define your pipeline with a simple YAML file. FORGE handles the rest with intelligent defaults and
                auto-scaling.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-600">Automatic dependency caching</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-600">Parallel test execution</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-600">Zero-downtime deployments</span>
                </li>
              </ul>
            </div>

            <div className="rounded-xl overflow-hidden shadow-xl border border-slate-200 bg-slate-900">
              <div className="bg-slate-800 px-4 py-3 flex items-center gap-2 border-b border-slate-700">
                <Code2 className="w-4 h-4 text-slate-400" />
                <span className="text-sm text-slate-300 font-mono">forge.yml</span>
              </div>
              <pre className="p-6 overflow-x-auto text-sm">
                <code className="text-slate-300 font-mono leading-relaxed">
                  {`name: Deploy App

on:
  push:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Install dependencies
        run: npm install
      - name: Run tests
        run: npm test
      - name: Deploy
        run: forge deploy --prod`}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Performance Stats */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold text-slate-900 mb-4">Built for performance at scale</h2>
            <p className="text-lg text-slate-600">
              Trusted by thousands of teams to deploy millions of times per month.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-xl bg-slate-50">
              <div className="text-4xl font-bold text-indigo-600 mb-2">10x</div>
              <div className="text-slate-600">Faster builds</div>
            </div>
            <div className="text-center p-8 rounded-xl bg-slate-50">
              <div className="text-4xl font-bold text-indigo-600 mb-2">99.99%</div>
              <div className="text-slate-600">Uptime SLA</div>
            </div>
            <div className="text-center p-8 rounded-xl bg-slate-50">
              <div className="text-4xl font-bold text-indigo-600 mb-2">5M+</div>
              <div className="text-slate-600">Deploys per month</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-slate-900">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-semibold text-white mb-4">Ready to ship faster?</h2>
          <p className="text-xl text-slate-300 mb-10">
            Join thousands of teams already deploying with confidence on FORGE.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 text-base rounded-lg">
              Start for Free
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button
              variant="outline"
              className="border-slate-600 text-white hover:bg-slate-800 px-8 py-3 text-base rounded-lg bg-transparent"
            >
              Talk to Sales
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-100 py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Anvil className="w-5 h-5 text-indigo-600" />
                <span className="font-semibold text-slate-900">FORGE</span>
              </div>
              <p className="text-sm text-slate-600">The modern CI/CD platform for teams that ship.</p>
            </div>

            <div>
              <h4 className="font-semibold text-slate-900 mb-3">Product</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm text-slate-600 hover:text-slate-900">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-slate-600 hover:text-slate-900">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-slate-600 hover:text-slate-900">
                    Changelog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-slate-600 hover:text-slate-900">
                    Status
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-slate-900 mb-3">Resources</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm text-slate-600 hover:text-slate-900">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-slate-600 hover:text-slate-900">
                    Guides
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-slate-600 hover:text-slate-900">
                    API Reference
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-slate-600 hover:text-slate-900">
                    Community
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-slate-900 mb-3">Company</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm text-slate-600 hover:text-slate-900">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-slate-600 hover:text-slate-900">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-slate-600 hover:text-slate-900">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-slate-600 hover:text-slate-900">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-100 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-slate-500">© 2025 FORGE. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="#" className="text-sm text-slate-500 hover:text-slate-900">
                Privacy
              </Link>
              <Link href="#" className="text-sm text-slate-500 hover:text-slate-900">
                Terms
              </Link>
              <Link href="#" className="text-sm text-slate-500 hover:text-slate-900">
                Security
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
