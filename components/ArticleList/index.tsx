import { FC } from 'react';
import Link from 'next/link';
import { formatDashDate, capitalizeLetter } from '@lib/format';
import { Articles } from '@myTypes/articles';
import {
  ArticleIntro,
  ArticleWrapper,
  Infos,
  Category,
  Date,
  Title,
  Brief,
} from '@components/ArticleList/indexStyle';

const ArticleList: FC<{ articleIntro?: string; articles: Articles }> = ({
  articleIntro,
  articles,
}) => {
  return (
    <>
      {articleIntro && <ArticleIntro>{articleIntro}</ArticleIntro>}
      {articles.map(({ frontmatter, slug }) => {
        const { title, description, date, category } = frontmatter;
        const formattedDate = formatDashDate(date);

        return (
          <Link key={title} href={`/articles/${category}/${slug}`}>
            <ArticleWrapper>
              <Infos>
                <Category>{capitalizeLetter(category)}</Category>
                <Date>{formattedDate}</Date>
              </Infos>
              <Title>{title}</Title>
              <Brief>{description}</Brief>
            </ArticleWrapper>
          </Link>
        );
      })}
    </>
  );
};

export default ArticleList;
