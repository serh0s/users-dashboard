import type { User } from "../types";

type Props = {
    user: User | null,
    onClose: () => void
}

export default function UserInfo({ user, onClose }: Props ) {
    if (!user) return null;

    return (
        <article className="card">
            <img
                className="card-image"
                src={ user.image }
                alt=""
            />

            <div className="card-info">
                <div className="card-header">
                    <div>
                        <h1 className="card-header__title">{ user.name }</h1>
                        <p className="card-header__subtitle">{ user.username }, { user.address.city }</p>
                    </div>

                    <button
                        className="card-header__actions"
                        onClick={ onClose }
                    >
                        Close
                    </button>
                </div>

                <dl className="card-details">
                    <div className="card-details__row">
                        <dt>Email</dt>
                        <dd>{ user.email}</dd>
                    </div>
                    <div className="card-details__row">
                        <dt>Phone</dt>
                        <dd>{ user.phone }</dd>
                    </div>
                    <div className="card-details__row">
                        <dt>Website</dt>
                        <dd>{ user.website }</dd>
                    </div>
                    <div className="card-details__row">
                        <dt>Company</dt>
                        <dd>{ user.company.name }</dd>
                    </div>
                </dl>
            </div>
        </article>
    )
}
