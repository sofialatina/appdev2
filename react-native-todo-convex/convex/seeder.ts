import { mutation } from "./_generated/server";

export const seed = mutation({
  args: {},
  handler: async (ctx) => {
    const tasks = ["Buy food", "Study", "Code"];

    for (const t of tasks) {
      await ctx.db.insert("todos", {
        text: t,
        isCompleted: false,
      });
    }

    return "Seeded!";
  },
});