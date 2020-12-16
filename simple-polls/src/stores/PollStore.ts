
import { writable } from "svelte/store"
import type { Poll } from "../shared/Models";

const PollStore = writable<Poll[]>([
    {
        question: "Golang or Rust",
        answerA: "Golang",
        answerB: "Rust",
        id: 0,
        votesA: 3,
        votesB: 1,
    },
])

export default PollStore