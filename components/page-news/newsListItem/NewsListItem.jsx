"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { slideFromBottom } from "@/constants/animations";

import "./newsListItem.scss";

const NewsList = ({ list }) => {
  return (
    <motion.ul className="news__list" {...slideFromBottom}>
      {list.map((post) => (
        <li
          className="news__item"
          key={post.id}
          style={{ backgroundImage: `url(${post.cover[0].url})` }}
        >
          <Link href={`news/${post.slug}`} className="news__link">
            <div className="news__link--content">
              <p className="p">{post.title}</p>
              <p className="p">{post.description}</p>
            </div>
            <i className="span">{post.published}</i>
          </Link>
        </li>
      ))}
    </motion.ul>
  );
};

export default NewsList;
