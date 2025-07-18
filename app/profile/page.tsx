import ProfileContent from "@/components/profile/profile-content"
import BottomNavigation from "@/components/layout/bottom-navigation"
import PageHeader from "@/components/layout/page-header"
import { SparklesCore } from "@/components/sparkles"
import { FloatingPaper } from "@/components/floating-paper"
import { User } from "lucide-react"

export default function ProfilePage() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      {/* Ambient background */}
      <div className="h-full w-full absolute inset-0 z-0">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>

      {/* Floating papers background */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <FloatingPaper count={6} />
      </div>

      <div className="relative z-10 pb-20">
        <PageHeader title="Profile" description="Track your learning progress" icon={User} />
        <ProfileContent />
      </div>

      <BottomNavigation />
    </main>
  )
}
