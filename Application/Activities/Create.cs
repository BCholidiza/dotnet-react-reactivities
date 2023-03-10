using Domain;
using MediatR;
using Persistence;

namespace Application.Activities
{
    public class Create
    {
        public class Command : IRequest
        {
            public Activity? Activity { get; set; }
        }

        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            // Unit is nothing
            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                // There is an AddAsync method but that is used for accessing the database
                _context.Activities.Add(request.Activity);

                await _context.SaveChangesAsync();

                return Unit.Value;  //essentially returns nothing. Just tells api that it is finished
            }
        }
    }
}