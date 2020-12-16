import { writable } from "svelte/store"
import type { Poll } from "../shared/Models";

const PollStore = writable<Poll[]>([
    {
        question: "Golang or Rust",
        answerA: "Golang",
        answerB: "Rust",
        id: 0,
        votesA: 15,
        votesB: 17,
    },
])

export default PollStore