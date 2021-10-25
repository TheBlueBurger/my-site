import { useRouter } from "next/router"
import { useEffect } from "react"

export default function Trol() {
    const router = useRouter();
  useEffect(() => {
    router.push("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
  }, [])
}
