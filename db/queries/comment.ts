import type { Comment } from "@prisma/client";
import { cache } from "react";
import { db } from "@/db";

export type commentWithAuthor = Comment & {
    user: { name: string | null; image: string | null };
};

export const fetchCommentsByPostId = cache( 
    (postId: string): Promise<commentWithAuthor[]> => {
    return db.comment.findMany({
        where: { postId },
        include: {
            user: { select: { 
                name: true,
                image: true
            }}
        }
    })
}
)