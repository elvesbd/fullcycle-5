package factory

import "github.com/elvesbd/gateway/domain/repository"

type RepositoryFactory interface {
	CreateTransactionalRepository() repository.TransactionRepository
}
