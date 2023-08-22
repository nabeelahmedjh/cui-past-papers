

  return (
    <div className="contributors flex flex-col">
      <h1 className="self-center text-4xl font-monsterrat font-medium ">
        Contributors
      </h1>
      <div className="self-center max-w-5xl w-full">
        <div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 sm:gap-12 m-8">
            {contributors.map((card) => (
              <ContCard
                testid={card.id}
                key={card.id}
                name={card.name}
                image={`https://api.dicebear.com/6.x/croodles/svg?scale=150&seed=${card.id}`}
                linkedIn={card.linkedIn}
              />
            ))}
          </div>
          <div ref={observerRef}>{isLoading && <p>Loading...</p>}</div>
      {nextPageUrl === null && <p>You have reached the end.</p>}
        </div>
      </div>
    </div>
  );
}
